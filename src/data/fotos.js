const imagens = import.meta.glob(
    "../assets/galeria/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        query: "?url",
        import: "default"
    }
);

export const fotos = Object.values(imagens);