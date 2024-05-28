'use client'
import Input from '@/components/forms/inputs'
import { maskCPF, maskPhone } from '@/components/forms/inputs/masks';
import { useForm } from 'react-hook-form';


export default function Home() {
  
  const { register,handleSubmit, setValue } = useForm();
  
  // const cpfMask = (event:any) => {
  //   const { value } = event.target;
  //   setValue('cpf', maskCPF(value));
  // };

  // const phoneMask = (event:any) => {
  //   const { value } = event.target;
  //   setValue('telefone', maskPhone(value));
  // };

  const handleMask = (mask: Function, name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {setValue(name, mask(event.target.value))}

  const handleFormSubmit = (data:any) => {
    console.log(data)
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='flex gap-6 items-end'>
        <Input label="CPF"
          props={
            {...register('cpf',{
              onChange : handleMask(maskCPF,'cpf')
            })}
          }
        />
        <Input label="Telefone"
          props={
            {...register('telefone',{
              onChange: handleMask(maskPhone,'telefone')
            })}            
          }
        />
        <button className='bg-cyan-600 text-white h-[28px] px-5 rounded-md' type='submit'>Enviar</button>
      </form>
    </main>
  );
}
