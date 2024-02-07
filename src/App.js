function App() {
  const imageSrc = 'https://via.placeholder.com/150';
  return (
    <>
      <div className="flex flex-col items-center gap-2 text-balance">
        <div className="relative w-full">
          <div>
            <br></br>
            <i className="absolute top-0 right-0 bg-red-600 py-5 px-7 clip-path-right"></i>
          </div>
        </div>
        <div className="relative flex flex-col w-full">
          <div className="self-center">
            <div>
              <div className="flex justify-center gap-4 flex-wrap mb-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <img
                    key={i}
                    className="mx-2"
                    src={imageSrc}
                    alt="Placeholder"
                  />
                ))}
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                {Array.from({ length: 3 }).map((_, i) => (
                  <img
                    key={i}
                    className="mx-2"
                    src={imageSrc}
                    alt="Placeholder"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex flex-col gap-2">
          <div className="self-center bg-red-600 p-1 rounded-[4px]">
            <h2>Development Team</h2>
            <i className="absolute top-[-8px] left-0 bg-red-600 py-5 px-7 clip-path-left"></i>
          </div>
          <div className="self-center">
            <div>
              <div className="flex justify-center gap-4 flex-wrap mb-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <img
                    key={i}
                    className="mx-2"
                    src={imageSrc}
                    alt="Placeholder"
                  />
                ))}
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                {Array.from({ length: 3 }).map((_, i) => (
                  <img
                    key={i}
                    className="mx-2"
                    src={imageSrc}
                    alt="Placeholder"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex flex-col gap-2">
          <div className="self-center bg-red-600 p-1 rounded-[4px]">
            <h2>Sales and Marketing Team</h2>
            <i className="absolute top-[-8px] right-0 bg-red-600 py-5 px-7 clip-path-right"></i>
          </div>
          <div className="self-center">
            <div>
              <div className="flex justify-center gap-4 flex-wrap mb-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <img
                    key={i}
                    className="mx-2"
                    src={imageSrc}
                    alt="Placeholder"
                  />
                ))}
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                {Array.from({ length: 3 }).map((_, i) => (
                  <img
                    key={i}
                    className="mx-2"
                    src={imageSrc}
                    alt="Placeholder"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div>
            <br></br>
            <i className="absolute bottom-0 left-0 bg-red-600 py-5 px-7 clip-path-left"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
