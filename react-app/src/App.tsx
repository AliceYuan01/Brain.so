import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  const [description, setDescription] = useState<string | null>(null);

  let items = ["Math 19", "Physics 23", "Bio 101", "CS 5", "Writ 1"];

  const handleSelectItem = (item: string) => {
    const itemDescriptions: { [key: string]: string } = {
      "Math 19":
        "A robust introduction to multivariable calculus together with a comprehensive review of the theory and techniques of differential and integral calculus of a single variable. Topics include limits, continuity, derivatives, definite integrals, infinite series, Taylor approximations, vectors, equations of lines and planes, partial derivatives, double and triple integrals, linear approximations, the gradient, directional derivatives and the Jacobian, optimization and the second derivative test, higher-order derivatives, vector fields, curl, divergence, path integrals, Green’s theorem, flux and surface integrals, Stokes and Gauss Theorems.",
      "Physics 23":
        "Einstein’s special theory of relativity is developed from the premises that the laws of physics are the same in all inertial frames and that the speed of light is a constant. The relationship between mass and energy is explored and relativistic collisions analyzed. The families of elementary particles are described and the equivalence principle developed.",
      "Bio 101":
        "Topics in ecology, evolution, molecular genetics, and computational biology.",
      "CS 5":
        "Introduction to the heart  of computer science. Students engage in computational problem-solving techniques and gain experience with the design, implementa­tion, testing, and documentation of programs in a high-level language. In addition, students learn to design digital devices, program in a small machine language, recognize computing’s inherent limitations, and understand how computers operate in practice. Societal and ethical issues related to computer science are central.",
      "Writ 1":
        "A seminar devoted to effective writing strategies and conventions that apply across academic disciplines. The course emphasizes repeated revision in the service of clarity, concision, and coherence in arguments, paragraphs, and sentences.",
    };
    setDescription(itemDescriptions[item]);
  };

  const handleButtonClick1 = () => {
    setDescription("Student 1 is enrolled in Math 19.");
  };

  const handleButtonClick2 = () => {
    setDescription("Student 2 is enrolled in CS 5.");
  };

  const handleButtonClick3 = () => {
    setDescription("Student 3 is enrolled in Physics 23.");
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Subjects"
        onSelectItem={handleSelectItem}
      />
      {/* Add a heading before the button */}
      <h2>Student Information</h2> {/* This is your new heading */}
      <Button label="Student 1" onClick={handleButtonClick1} />
      <Button label="Student 2" onClick={handleButtonClick2} />
      <Button label="Student 3" onClick={handleButtonClick3} />
      {/* Display description when an item or button is clicked */}
      {description && <Alert>{description}</Alert>}
    </div>
  );
}

export default App;
