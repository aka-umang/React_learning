import {Bookmark} from "lucide-react"
import Card from "./components/card"

const jobs = [
  {
    logo: "https://static.vecteezy.com/system/resources/previews/018/779/928/original/3d-illustration-of-amazon-logo-free-png.png",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior-Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://i.pinimg.com/originals/68/3d/9a/683d9a1a8150ee8b29bfd25d46804605.png",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$100/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/473/original/microsoft-logo-microsoft-icon-transparent-free-png.png",
    company: "Microsoft",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Junior-Level",
    pay: "$90/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full-Time",
    tag2: "Senior-Level",
    pay: "$150/hr",
    location: "Cupertino, USA"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Remote",
    tag2: "Senior-Level",
    pay: "$140/hr",
    location: "Los Angeles, USA"
  },
  {
    logo: "https://img.icons8.com/3d-fluency/200/meta.png",
    company: "Meta",
    datePosted: "Today",
    post: "Machine Learning Engineer",
    tag1: "Full-Time",
    tag2: "Expert-Level",
    pay: "$180/hr",
    location: "Menlo Park, USA"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/060/100/962/non_2x/white-adobe-logo-square-rounded-adobe-logo-adobe-logo-free-download-free-png.png",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Hybrid",
    tag2: "Mid-Level",
    pay: "$95/hr",
    location: "Noida, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/3840px-Spotify_logo_without_text.svg.png",
    company: "Spotify",
    datePosted: "1 week ago",
    post: "UX Researcher",
    tag1: "Remote",
    tag2: "Senior-Level",
    pay: "$110/hr",
    location: "Stockholm, Sweden"
  },
  {
    logo: "https://images.seeklogo.com/logo-png/27/2/shopify-logo-png_seeklogo-273895.png",
    company: "Shopify",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full-Time",
    tag2: "Mid-Level",
    pay: "$105/hr",
    location: "Toronto, Canada"
  },
  {
    logo: "https://miro.medium.com/1*-_Oy1F9RhlYwtRGSyNEj9w.png",
    company: "Airbnb",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Remote",
    tag2: "Senior-Level",
    pay: "$130/hr",
    location: "San Francisco, USA"
  }
];

function App(){
    return(
      <div className="parent">
        {jobs.map(item=>{
          // return <Card key={item.company} money={item.pay}/>
          return <Card key={item.company} {...item}/>
        })}
      </div>
    );
}

export default App;