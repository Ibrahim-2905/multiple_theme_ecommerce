export default function HeadingAndDescription({
  heading,
  description,
  marginTop = "mt-20",
  marginBottom = "mb-10"
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');
        body {
          font-family: 'Jost', sans-serif;
        }
      `}</style>

      <div className={`flex items-center justify-center ${marginTop} ${marginBottom}`}>
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-6xl  text-gray-900 mb-6">
            {heading}
          </h1>
          <p className="text-base sm:text-md lg:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
