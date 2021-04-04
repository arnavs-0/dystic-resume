import React, { useState, useEffect } from 'react';
import '../styles/ResumeInsightModal.css';
import { toast } from 'react-toastify';
import SkillBar from 'react-skillbars';


function ResumeInsightModal(props) {
  const [concepts, setConcepts] = useState([]);
  const [emotions, setEmotions] = useState([]);

  async function getResumeInsight(id) {
    return fetch(`https://dystic-contact.herokuapp.com/analyze/${id}`)
      .then((res) => res.json())
      .then((data) => data);
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    getResumeInsight(props.resumeID).then((value) => {
      try {
        value.concepts.map((v) => {
          // concepts.push({type: v.text, level: v.relevance*100})
          // console.log({type: v.text, level: v.relevance*100})
          setConcepts((prev) => [
            ...prev,
            { type: v.text, level: (v.relevance * 100).toFixed(2) },
          ]);
        });
        Object.keys(value.emotion.document.emotion).map((key, index) => {
          setEmotions((prevState) => [
            ...prevState,
            {
              type: capitalize(key),
              level: (value.emotion.document.emotion[key] * 100).toFixed(2),
            },
          ]);
        });
      } catch (e) {
        setConcepts([{ type: 'Error', level: 100 }]);
        setEmotions([{ type: 'Error', level: 100 }]);
        toast.error('Error', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }, []);

  const colors = {
    bar: '#F4B2B0',
    title: {
      text: '#fff',
      background: '#1A2E35',
    },
  };
  return (
    <div className="resume-insight-modal-container">
      <p className="rim-title">{props.resumeID} Resume Insight</p>
      <p className="font-weight-bold">Emotions</p>
      <SkillBar skills={emotions} colors={colors} />
      <p className="font-weight-bold">Keywords</p>
      <SkillBar skills={concepts} colors={colors} />

      {/* <SkillBar skills={concepts}/> */}
    </div>
  );
}

export default ResumeInsightModal;
