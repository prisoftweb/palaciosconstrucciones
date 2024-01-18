import typography from '@/app/sass/base/_typography.module.scss';
import utilities from '@/app/sass/base/_utilities.module.scss';
import img from  "@/app/sass/components/_imagen.module.scss";

export default function Card({service}: {service:any}){
  return (
    <>
      <div className="shrink flex flex-col w-full  pr-10 mr-10">
        <div className="shrink w-full pr-10 mr-10">
          <h2 className={typography.heading5}>
            {service.name}
          </h2>
          <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
            {service.description? service.description: 'sin descripcion...'}
          </p>              
        </div>
        <img
          className={`${img.imagen} shrink w-full ${utilities.u_margin_bottom_sm}`}
          src={service.logo}
          alt={service.name}
        />
      </div>
    </>
  )
}