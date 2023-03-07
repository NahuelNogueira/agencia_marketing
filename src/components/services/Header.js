import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
          <div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-5xl">
                Software Development Services
                <div
                  className="inline-flex"
                  style={{ color: "#ff561e", fontWeight: "bold" }}
                ></div>
              </h1>
              <p className="mt-6 text-lg max-w-3xl leading-8 text-black ">
                We love to shake established thought-patterns and create what
                has never been attempted before. We take seeds and grow jungles
              </p>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img
                src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg"
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
