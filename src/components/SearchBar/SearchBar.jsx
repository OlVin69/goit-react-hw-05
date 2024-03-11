import css from './SearchBar.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";;
import  { toast } from 'react-hot-toast';

export default function SearchBar({onSearch}) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
  const topic = form.elements.topic.value.trim();
  if(topic === "") {
    toast.error('Please enter a search query.');
    return;
  }
    onSearch(topic);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
        className={css.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit"> <FaMagnifyingGlass/></button>
      </form>
    </header>
  );
}





