import { NextResponse } from "next/server";
import { 
  PROJECTS_DATA, 
  EXPERIENCE_DATA, 
  SERVICES_DATA, 
  CERTIFICATION_DATA, 
  EDUCATION_DATA 
} from "@/constants";

type Message = {
  role: string;
  content: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: Message[] = body.messages || [];
    
    const lastMessage = messages.length > 0 
      ? messages[messages.length - 1].content.toLowerCase() 
      : "";

    let reply = "";

    if (lastMessage.includes("halo") || lastMessage.includes("hi") || lastMessage.includes("pagi") || lastMessage.includes("siang") || lastMessage.includes("malam")) {
      reply = "Halo! Saya asisten virtual portofolio ini. Ada yang bisa saya bantu? Coba tanyakan tentang 'Proyek', 'Pengalaman', atau 'Pendidikan' saya.";
    }
    else if (lastMessage.includes("proyek") || lastMessage.includes("project") || lastMessage.includes("karya") || lastMessage.includes("portfolio")) {
      const projectNames = PROJECTS_DATA.map(p => `- ${p.title}`).join("\n");
      reply = `Berikut adalah proyek unggulan saya:\n\n${projectNames}\n\nSilakan lihat detailnya di halaman Portfolio.`;
    }
    else if (lastMessage.includes("pengalaman") || lastMessage.includes("kerja") || lastMessage.includes("experience") || lastMessage.includes("job")) {
      if (EXPERIENCE_DATA.length > 0) {
        const jobs = EXPERIENCE_DATA.map(e => `- ${e.role} di ${e.company}`).join("\n");
        reply = `Pengalaman profesional saya:\n\n${jobs}`;
      } else {
        reply = "Data pengalaman kerja belum tersedia.";
      }
    }
    else if (lastMessage.includes("skill") || lastMessage.includes("keahlian") || lastMessage.includes("bisa apa") || lastMessage.includes("teknologi")) {
      reply = "Saya ahli dalam Web Development menggunakan Next.js, React, Tailwind CSS, dan Backend Development.";
    }
    else if (lastMessage.includes("sertifikat") || lastMessage.includes("lisensi") || lastMessage.includes("certificate")) {
       if (CERTIFICATION_DATA.length > 0) {
        const certs = CERTIFICATION_DATA.map(c => `- ${c.title} (${c.issuer})`).join("\n");
        reply = `Sertifikasi yang saya miliki:\n\n${certs}`;
       } else {
         reply = "Data sertifikat belum tersedia.";
       }
    }
    else if (lastMessage.includes("kuliah") || lastMessage.includes("sekolah") || lastMessage.includes("pendidikan") || lastMessage.includes("education")) {
        if (EDUCATION_DATA.length > 0) {
          const edus = EDUCATION_DATA.map(e => `- ${e.degree} di ${e.institution}`).join("\n");
          reply = `Riwayat pendidikan saya:\n\n${edus}`;
        } else {
          reply = "Data pendidikan belum tersedia.";
        }
    }
    else if (lastMessage.includes("jasa") || lastMessage.includes("service") || lastMessage.includes("layanan") || lastMessage.includes("bikin")) {
        if (SERVICES_DATA.length > 0) {
          const services = SERVICES_DATA.map(s => `- ${s.title}`).join("\n");
          reply = `Saya menyediakan layanan:\n\n${services}`;
        } else {
          reply = "Saya melayani pembuatan Website dan Aplikasi Web.";
        }
    }
    else if (lastMessage.includes("kontak") || lastMessage.includes("hubungi") || lastMessage.includes("wa")) {
      reply = "Anda bisa menghubungi saya melalui kontak yang tertera di bagian bawah website ini.";
    }
    else {
      reply = "Maaf, pertanyaan tersebut belum saya pahami atau fitur tersebut masih dalam pengembangan. Silakan tanyakan tentang 'Proyek', 'Keahlian', atau 'Pendidikan' saya.";
    }

    return NextResponse.json({ message: reply });

  } catch {
    return NextResponse.json(
      { message: "Maaf, sistem sedang sibuk." },
      { status: 500 }
    );
  }
}