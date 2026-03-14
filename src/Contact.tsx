export default function Contact() {
  return (
    <div>
      <div className="relative z-5 flex flex-col items-end w-full  h-fit text-right text-white md:mix-blend-difference pointer-events-none mb-10 mt-5">
        <p>
          <hr></hr>06
        </p>
        <span className="text-7xl md:text-9xl font-extralight mb-4">CONTACT</span>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col items-end gap-3 mb-10">
            <h1 className="uppercase max-w-[400px] min-w-[300px]">
              Got a project in mind? // Let's build something worth looking at
            </h1>
            <hr className="relative z-10 w-20 border-t border-white mix-blend-normal" />
            <p>BASED IN JAKARTA, INDONESIA</p>
            <p className="text-[11px] font-light">OPEN TO FREELANCE + COLLABORATION</p>
          </div>
          <p className="max-w-[600px] min-w-[300px] h-fit mb-5 font-light text-[12px] tracking-wide leading-5">
            Whether you're a studio looking for a creative developer, a founder who needs
            a product that actually looks the part, or a brand ready to take your digital
            presence seriously — I'd like to hear about it. I take on a limited number of
            projects at a time to give each one the attention it deserves.
            <br /><br />
            Fill out the form and I'll get back to you within 48 hours.
            Alternatively, reach me directly at{" "}
            <span className="underline pointer-events-auto">teru@email.com</span>.
          </p>
        </div>
        <form className="w-full flex justify-end">
          <fieldset className="flex flex-col  w-full md:w-100 items-end gap-2">
            <legend className="mb-2 text-[11px] tracking-widest">START A CONVERSATION</legend>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-md h-10 w-full pointer-events-auto"
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md h-10 w-full pointer-events-auto"
            ></input>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="border rounded-md h-70 w-full pointer-events-auto"
            ></textarea>
            <button className="bg-white w-fit py-1 px-3 rounded-full text-black hover:bg-blue-700 hover:text-white pointer-events-auto">
              SEND MESSAGE →
            </button>
          </fieldset>
        </form>
      </div>
      <hr className="relative z-1 w-full border-t border-gray-500  md:mix-blend-difference" />
    </div>
  );
}
