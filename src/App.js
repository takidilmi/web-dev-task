function App() {
  const imageSrc = 'https://via.placeholder.com/150';
  const leaderTeam = [
    '[Founder Name]',
    '[Founder Name]',
    '[VP Name]',
    '[VP Name]',
    '[VP Name]',    
  ];
  const leaderRole = [
    'Founder/ CEO',
    'Founder/ CEO',
    'VP, Development & Growth',
    'VP, Sales & Marketing',
    'VP, Finance & Operation',    
  ];
  const developerName = [
    '[Developer Name]',
    '[Developer Name]',
    '[Developer Name]',
    '[Developer Name]',
    '[Developer Name]',
    '[Developer Name]',
    '[Developer Name]',
  ];
  const developerRole = [
    'Team Lead, SE',
    'Software Engineer',
    'Software Engineer',
    'Software Engineer',
    'Software Engineer',
    'Software Engineer',
    'Software Engineer',
  ];
  const memberName = [
    '[Employee Name]',
    '[Employee Name]',
    '[Employee Name]',
    '[Employee Name]',
    '[Employee Name]',
    '[Employee Name]',
    '[Employee Name]',
  ];
  const memberRole = [
    'Team Lead',
    'Sales Officer',
    'Sales Officer',
    'Sales Officer',
    'Marketing Officer',
    'Marketing Officer',
    'Marketing Officer',
  ];
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
                  <div
                    key={i}
                    className="mx-2 flex flex-col justify-center items-center text-center"
                  >
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                    />
                    <p>{leaderTeam[i]}</p>
                    <p>{leaderRole[i]}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="mx-2 flex flex-col justify-center items-center text-center"
                  >
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                    />
                    <p>{leaderTeam[i + 2]}</p>
                    <p className="w-[90%]">{leaderRole[i + 2]}</p>
                  </div>
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
                  <div
                    key={i}
                    className="mx-2 flex flex-col justify-center items-center text-center"
                  >
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                    />
                    <p>{developerName[i]}</p>
                    <p>{developerRole[i]}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="mx-2 flex flex-col justify-center items-center text-center"
                  >
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                    />
                    <p>{developerName[i + 4]}</p>
                    <p>{developerRole[i + 4]}</p>
                  </div>
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
                  <div
                    key={i}
                    className="mx-2 flex flex-col justify-center items-center text-center"
                  >
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                    />
                    <p>{memberName[i]}</p>
                    <p>{memberRole[i]}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="mx-2 flex flex-col justify-center items-center text-center"
                  >
                    <img
                      src={imageSrc}
                      alt="Placeholder"
                    />
                    <p>{memberName[i + 4]}</p>
                    <p>{memberRole[i + 4]}</p>
                  </div>
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
