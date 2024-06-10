import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Eager to explore diverse essay topics?</h2>
        <p className="text-gray-500 my-2">
          Dive into our curated selection of 200 stimulating essay ideas to
          kickstart your writing journey
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://essaypro.com/blog/narrative-essay-topics"
            target="_blank"
            rel="noopener noreferrer"
          >
            200 Essay Topics
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          className="rounded-t-3xl rounded-b-3xl"
          src="https://media.sva.edu/image/upload/heroImage/laura-brown-writing-3033x1710-laura-brown-1692029515-derivative.webp"
        />
      </div>
    </div>
  );
}
