import { useState, useRef } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import CVPreview from "./CVPreview";
import html2pdf from "html2pdf.js";

export default function CVForm() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({ school: "", title: "", date: "" });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  const [showPreview, setShowPreview] = useState(false);
  const cvRef = useRef();

  const handleDownload = async () => {
    setShowPreview(true);

    setTimeout(() => {
      if (cvRef.current) {
        const opt = {
          margin: 0.5,
          filename: "my-cv.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };

        html2pdf()
          .set(opt)
          .from(cvRef.current)
          .save()
          .then(() => {
            setShowPreview(false);
          });
      }
    }, 300);
  };

  return (
    <div>
      <GeneralInfo data={general} setData={setGeneral} />
      <Education data={education} setData={setEducation} />
      <Experience data={experience} setData={setExperience} />

      {showPreview && (
        <div>
          <CVPreview
            ref={cvRef}
            general={general}
            education={education}
            experience={experience}
          />
        </div>
      )}

      <div className="form-actions" style={{ marginTop: "2rem", marginRight: "2rem" }}>
        <button onClick={handleDownload}>Download PDF</button>
      </div>
    </div>
  );
}
