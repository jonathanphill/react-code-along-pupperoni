const Form = ()=>{
    return (
      <form action="">
        <label>Filter the pictures by this orientation:</label>
        <select name="pets" id="pet-select">
          <option value="" disabled>
            --Pick One--
          </option>
          <option value="portrait">portrait </option>
          <option value="square">square </option>
          <option value="landscape">landscape </option>
        </select>

        <button>Show me the puppies</button>
      </form>
    );
}
export default Form;