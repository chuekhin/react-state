import { create } from "zustand";

const useFaqStore = create((set) => ({
  questions: [
    {
      id: 1,
      question: "How do you add an item to an array in React?",
      answer:
        "You can add an item to an array in React using the spread operator, e.g., `setArray([...array, newItem])`.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How do you update a specific item in an array in React?",
      answer:
        "Use `.map()` to iterate over the array and update the item based on a condition, e.g., `setArray(array.map(item => item.id === id ? updatedItem : item))`.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is the use of the `.map()` function in React?",
      answer:
        "The `.map()` function is used to iterate over an array and return a new array, which is often used to dynamically render lists in React components.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How do you remove an item from an array in React?",
      answer:
        "Use the `.filter()` method to create a new array excluding the item, e.g., `setArray(array.filter(item => item.id !== id))`.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Why is immutability important when updating state in React?",
      answer:
        "Immutability helps React efficiently detect changes by comparing old and new states, enabling optimized rendering and avoiding direct mutations.",
      isOpen: false,
    },
  ],
  openQuestion: (questionId) =>
    set((state) => ({
      questions: state.questions.map((el) =>
        el.id === questionId
          ? { ...el, isOpen: !el.isOpen }
          : { ...el, isOpen: false }
      ),
    })),
}));

export default useFaqStore;
