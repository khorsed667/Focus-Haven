const WorkProcess = () => {
  return (
    <div className="p-8 font-sans max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
        How <span className="text-slate-500">our platform</span> works
      </h2>
      <p className="mb-8 text-slate-500">
        Navigating your healthcare journey with HealNet is seamless. Just follow
        these steps mentioned below to proceed with your selected
        services. You can also see our FAQ section for more guidance:
      </p>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
        <div className="hidden lg:block border-black border-l-2 border-dotted me-8"></div>
        <div className="relative w-full lg:w-3/5 space-y-8 lg:me-9">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-t from-black to-slate-300 text-white text-xl font-bold">
                1
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p>
                Sign up and fill in your contact details securely. Setting up your profile ensures that you receive all the updates and your photographs promptly.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-t from-black to-slate-300 text-white text-xl font-bold">
                2
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Package</h3>
              <p>
                Select from a variety of photography packages designed to suit your needs. Whether you want candid shots, group photos, or a complete coverage, we've got you covered.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-t from-black to-slate-300 text-white text-xl font-bold">
                3
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Memories</h3>
              <p>
                Once your summer camp session is over, we'll send you a link to access and download your high-quality photos. Relive the fun and share the memories with your friends and family.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
          <img
            src="https://img.freepik.com/free-photo/young-indian-man-with-camera-isolated-white-background_231208-3753.jpg?t=st=1716470883~exp=1716474483~hmac=5c44bc9c1e301ab6b026640577cf257e3d7a933fcf0a392f80c23538558ac1f9&w=360"
            alt="Photographer"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
