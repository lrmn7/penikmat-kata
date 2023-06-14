type Social = {
  label: string;
  link: string;
};

type Presentation = {
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "",
  title: "Istirahat Sejenak",
  description:
    "Hanya penikmat kata yang akan menjadi kalimat pada akhirnya.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/romanromannya",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/romanroman.nya",
    },
    {
      label: "Pinterest",
      link: "https://id.pinterest.com/romanromannya",
    },
  ],
};

export default presentation;
