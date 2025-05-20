import Heading from "./Heading";
import Testmonial from "./Testmonial";

const TestmonialContainer = () => {
  return (
    <div className="mt-8 mx-17">
      <Heading headingContent={"Customer Testimonial"} />
      <div className="flex mt-10 mx-16 justify-center gap-25 overflow-hidden">
        <Testmonial />
        <Testmonial />
        <Testmonial />
        <Testmonial />
        <Testmonial />
        <Testmonial />
      </div>
    </div>
  );
};

export default TestmonialContainer;
