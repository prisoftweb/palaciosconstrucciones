"use client"
import { useState, useEffect } from "react"
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import FormikErrors from "../FormikErrors";
import ButtonIssue from "./ButtonIssue";
import { createReview } from "@/app/api/RouteReviews";
import StarElement from "./StarElement";
import UploadImage from "../UploadImage";
import TextArea from "../TextArea";
import SelectProjects from "./SelectProjects";
import Alert, {showToastMessage, showToastMessageError} from "../Alert";
import { useRouter } from "next/navigation";
import typography from "@/app/sass/base/_typography.module.scss";
import utilities from "@/app/sass/base/_utilities.module.scss";


export default function FormReview({issues, projects}: {issues:any, projects:any}){
  
  const [project, setProject] = useState<string>(projects[0]._id);
  const [file, setFile] = useState<any>();
  const [rating, setRating] = useState<number>(5);
  const [filter, setFilter] = useState<any[]>();
  const [issueList, setIssueList] = useState<any[]>([]);
  const [category, setCategory] = useState<string>();
  
  const router = useRouter();

  const onProjectChange = (value:string) => {
    setProject(value);
  }

  const formik = useFormik({
    initialValues: {
      email:'',
      name:'',
      comments: ''
    }, 
    validationSchema: Yup.object({
      email: Yup.string()
                  .email('El email no es valido')
                  .required('El email no puede ir vacio'),
      name: Yup.string()
                  .required('El nombre es obligatorio'),
      comments: Yup.string()
                  .required('Los comentarios son obligatorios')
    }),
    onSubmit: async (valores) => {
      const {name, email, comments} = valores;

      const issuelist:string[] = [];

      issueList.map((issue: any) => {
        if(issue.state){
          issuelist.push(issue.id);
        }
      })

      const dataReview = new FormData();
      dataReview.append('name', name);
      dataReview.append('email', email);
      dataReview.append('review', comments);
      if(category) dataReview.append('category', category);
      dataReview.append('rating', rating.toString());
      issuelist.map((issue) => {
        dataReview.append('issuelist', issue);
      })
      dataReview.append('project', project);
      dataReview.append('photo', file);

      const review = {
        name,
        email,
        'review': comments,
        category,
        rating,
        issuelist,
        project,
        "photo": "/public/img/clients/default.jpg",
      }

      try {
        const res = await createReview(review);
        if(typeof(res)==='string'){
          showToastMessageError(res);
        }
        if(res === 201) {
          showToastMessage('Agradecemos sus comentarios, seguiremos mejorando!!');
          router.push('/')
        }
      } catch (error) {
        showToastMessageError('Error al enviar su opinion!!');
      }                                  
    },       
  });
  
  useEffect(() => {
    const filtered = issues.filter((issue: any) => issue.rating === rating); 
    setFilter(filtered);
    const issuesAux:any[] = [];
    filtered.map((issueFilter:any) => {
      issuesAux.push({
        id: issueFilter._id,
        state: false,
      })
    })
    setIssueList(issuesAux);
    if(filtered && filtered.length > 0){
      setCategory(filtered[0].category);
    }
  }, [rating])

  const selectIssue = (index: number) => {
    const newArray: any[] = [...issueList];
    newArray[index] = {
      id: newArray[index].id,
      state: !newArray[index].state,
    }
    setIssueList(newArray);
  }

  const selectRating = (value: number) => {
    setRating(value);
  }

  return (
    <>
      <Alert/>
      <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_}`}>
        Reseña de obra
      </h3>
      <h3 className={`${typography.subtitle_thin}`}>
        Dejanos tus comentarios
      </h3>        
      <p className={`${typography.heading4} ${utilities.u_margin_bottom_md}`}>
        Puede dejarnos su opinión sobre nosotros, sobre su experiencia utilizando nuestros servicios de construccion, y sobre sus sentimientos acerca de un proyecto en espesifico. 
      </p>              
      <form className="bg-white rounded shadow-md w-full sm:w-10/12 lg:w-10/12 xl:w-1/2 md:px-8 pt-6 pb-3" encType="multipart/form-data" onSubmit={formik.handleSubmit}>                            
        <div>
          <div className="flex flex-wrap">
            <div className="w-full px-2 sm:w-1/2 mb-4 text-gray-700">
              <div className="mb-4">
                <Label htmlFor="project">Proyecto</Label>
                <SelectProjects projectChange={onProjectChange} projects={projects} project={project} />
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-3 sm-px-5">
              <div className="mb-4">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Deja tu nombre"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleChange}
                />
              </div>
            </div>
            {formik.touched.name && formik.errors.name ? (
              <FormikErrors error={formik.errors.name} />
            ) : null}
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 px-3 sm-px-5">
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tucorreo@dominio.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleChange}
                />
              </div>
            </div>
            {formik.touched.email && formik.errors.email ? (
                <FormikErrors error={formik.errors.email} />
              ) : null}
            <div className="w-full sm:w-1/2 px-3 sm-px-5">
              <div className="mb-4">
                <UploadImage setFile={setFile} />
              </div>
            </div> 
          </div>
        </div>
        <div className="flex px-2 justify-center">
          <StarElement index={1} rating={rating} selectRating={selectRating} />
          <StarElement index={2} rating={rating} selectRating={selectRating} />
          <StarElement index={3} rating={rating} selectRating={selectRating} />
          <StarElement index={4} rating={rating} selectRating={selectRating} />
          <StarElement index={5} rating={rating} selectRating={selectRating} />
        </div>
        <div className="flex flex-wrap justify-center px-2 mt-3">
          {filter?.map((issue:any, index:number) => (
            <ButtonIssue selectIssue={selectIssue} index={index} key={issue._id} issue={issue} />
          ))}
        </div>
        <div className="flex mt-3">
          <div className="w-full px-3 sm-px-5">
            <Label htmlFor="comments">Comentarios</Label>
            <TextArea 
              name="comments" id="comments"
              placeholder="Dejanos tus comentarios"
              value={formik.values.comments}
              onChange={formik.handleChange}
              onBlur={formik.handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center my-2">
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </>
  )
}