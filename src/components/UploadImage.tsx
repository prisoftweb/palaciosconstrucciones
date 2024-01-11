import Input from "./Input";
import Label from "./Label";

export default function UploadImage({setFile}: {setFile:Function}){
  
  const onFileChange = (e: any) => {

    if(e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if(file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFile(file);
      } else {
        //showToastMessageError('Esta no es una imagen!, favor de agregar imagen');
      }
    }
  }
  return(
    <div className="mb-4 text-gray-700">
      <Label htmlFor="photo" >Adjunta tu foto (opcional):</Label>
      <div className='border-2 border-dashed rounded-md border-gray-200 relative py-0 w-full mt-2'
        style={{border:'2px', borderStyle:'dashed', paddingTop:'9px', paddingBottom:'9px', borderColor:'#E5E7EB'}}
      >
        <Input 
          type="file" 
          id="photo" 
          name="photo"
          onChange={onFileChange} 
          className='opacity-0 absolute inset-0 w-full'
          style={{opacity:0, position:"absolute", inset:0}}
        />
        <p className='text-center text-2xl'>Subir imagen</p>
      </div>
    </div>
  )
}