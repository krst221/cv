/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';

function Form() {
  const {register, handleSubmit, watch, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

/*   console.log(errors);
  
  console.log(watch());
  console.log(watch('name'));
 */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Name' {...register('name', {required: true, maxLength: 20})} />
        <input type='number' placeholder='Age' {...register('age', {required: true, min: 1, max: 120})} />
        <span>Programming Language</span><select {...register('language')}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JS">JS</option>
        </select>

        <button>Enviar</button>
    </form>
  )
}

export default Form