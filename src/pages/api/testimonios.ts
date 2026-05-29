export const prerender = false;

import type { APIRoute } from "astro";
import fs from "node:fs/promises";
import path from "node:path";
import { slugify } from "../../utils/slugify.js";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name")?.toString().trim();
    const role = data.get("role")?.toString().trim();
    const company = data.get("company")?.toString().trim();
    const testimonial = data.get("testimonial")?.toString().trim();
    const service = data.get("service")?.toString().trim();
    
    const imgFile = data.get("img") as File | null;
    const companyImgFile = data.get("companyImg") as File | null;

    if (!name || !role || !testimonial) {
      return new Response(
        JSON.stringify({ error: "Por favor, completa los campos obligatorios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const fileSlug = slugify(name);
    const testimonialPath = path.join(process.cwd(), "src/content/testimonials", `${fileSlug}.md`);

    // Verificar si ya existe un archivo con ese nombre
    let finalPath = testimonialPath;
    try {
      await fs.access(testimonialPath);
      const uniqueSlug = `${fileSlug}-${Math.floor(Date.now() / 1000)}`;
      finalPath = path.join(process.cwd(), "src/content/testimonials", `${uniqueSlug}.md`);
    } catch {
      // No existe, usar el original
    }

    // Guardar imágenes si fueron subidas
    let imgPath = "";
    let companyImgPath = "";

    if (imgFile && imgFile.size > 0) {
      const buffer = Buffer.from(await imgFile.arrayBuffer());
      const ext = (path.extname(imgFile.name) || ".jpeg").toLowerCase();
      const filename = `${fileSlug}${ext}`;
      const publicPath = path.join(process.cwd(), "public/assets/images/testimonials", filename);
      await fs.mkdir(path.dirname(publicPath), { recursive: true });
      await fs.writeFile(publicPath, buffer);
      imgPath = `/public/assets/images/testimonials/${filename}`;
    }

    if (companyImgFile && companyImgFile.size > 0) {
      const buffer = Buffer.from(await companyImgFile.arrayBuffer());
      const ext = (path.extname(companyImgFile.name) || ".jpeg").toLowerCase();
      const companySlug = company ? slugify(company) : "company";
      const filename = `${companySlug}${ext}`;
      const publicPath = path.join(process.cwd(), "public/assets/images/testimonials", filename);
      await fs.mkdir(path.dirname(publicPath), { recursive: true });
      await fs.writeFile(publicPath, buffer);
      companyImgPath = `/public/assets/images/testimonials/${filename}`;
    }

    // Armar el contenido del archivo Markdown
    let content = `---\n`;
    content += `name: ${JSON.stringify(name)}\n`;
    content += `role: ${JSON.stringify(role)}\n`;
    if (company) content += `company: ${JSON.stringify(company)}\n`;
    content += `testimonial: ${JSON.stringify(testimonial)}\n`;
    if (service) content += `service: ${JSON.stringify(service)}\n`;
    if (imgPath) content += `img: ${JSON.stringify(imgPath)}\n`;
    if (companyImgPath) content += `companyImg: ${JSON.stringify(companyImgPath)}\n`;
    content += `draft: true\n`;
    content += `---\n`;

    // Escribir el borrador en src/content/testimonials/
    await fs.mkdir(path.dirname(finalPath), { recursive: true });
    await fs.writeFile(finalPath, content, "utf-8");

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Ocurrió un error al procesar el testimonio." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
