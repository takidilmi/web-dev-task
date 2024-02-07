function App() {
  const imageSrc = '/defaultAvatar.png';
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
      <div className="flex flex-col items-center gap-10 text-balance">
        <div className="relative w-full">
          <div>
            <br></br>
            <i className="absolute top-0 right-0 bg-purple-400 py-5 px-7 clip-path-right"></i>
          </div>
        </div>
        <div className="relative flex flex-col w-full">
          <h1 className="self-center p-1 text-[28px] rounded-[4px] bg-purple-400">
            Company Name
          </h1>
          <p className="self-center w-[80%] text-center mt-4">
            Welcome to [Your Company Name], where a dedicated team of
            professionals work together to bring innovation, creativity, and
            expertise to software industry, get to know the individuals who make
            our company thrive.
          </p>
          <hr className="w-[40%] self-center border-t-[2px] my-10 border-dashed border-purple-400" />
          <h3>Meet Our Team</h3>
          <h2 className="self-center bg-purple-400 p-1 rounded-[4px] my-10"> Leadership / Management Team</h2>
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
                    <p className="teamName">{leaderTeam[i]}</p>
                    <p className="teamRole">{leaderRole[i]}</p>
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
                    <p className="teamName">{leaderTeam[i + 2]}</p>
                    <p className="w-[90%] teamRole">{leaderRole[i + 2]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex flex-col gap-2">
          <div className="self-center bg-purple-400 p-1 rounded-[4px]">
            <h2>Development Team</h2>
            <i className="absolute top-[-8px] left-0 bg-purple-400 py-5 px-7 clip-path-left"></i>
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
                    <p className="teamName">{developerName[i]}</p>
                    <p className="teamRole">{developerRole[i]}</p>
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
                    <p className="teamName">{developerName[i + 4]}</p>
                    <p className="teamRole">{developerRole[i + 4]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex flex-col gap-2">
          <div className="self-center bg-purple-400 p-1 rounded-[4px]">
            <h2>Sales and Marketing Team</h2>
            <i className="absolute top-[-8px] right-0 bg-purple-400 py-5 px-7 clip-path-right"></i>
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
                    <p className="teamName">{memberName[i]}</p>
                    <p className="teamRole">{memberRole[i]}</p>
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
                    <p className="teamName">{memberName[i + 4]}</p>
                    <p className="teamRole">{memberRole[i + 4]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div>
            <br></br>
            <i className="absolute bottom-0 left-0 bg-purple-400 py-5 px-7 clip-path-left"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
