interface FlowColProps {
  title: string;
  viewBox: string;
  svgHtml: string;
  svgStyle?: React.CSSProperties;
}

export default function FlowCol({ title, viewBox, svgHtml, svgStyle }: FlowColProps) {
  return (
    <div className="gtm-col">
      <p className="gtm-col-title">{title}</p>
      <svg
        viewBox={viewBox}
        width="100%"
        style={{ display: 'block', ...svgStyle }}
        dangerouslySetInnerHTML={{ __html: svgHtml }}
      />
    </div>
  );
}
