/* Renders a JSON-LD block into the server HTML. `<` is escaped so a stray
   "</script>" inside any string value can never close the tag early. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\u003c') }}
    />
  );
}
