import React, { useRef, useState, useEffect } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const ObjectDetection = () => {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const [highestConfidenceObject, setHighestConfidenceObject] = useState(null);

  useEffect(() => {
    const detectObjects = async () => {
      const model = await cocoSsd.load();
      const predictions = await model.detect(imageRef.current);

      if (predictions.length > 0) {
        // Find the object with the highest confidence
        const maxConfidenceObject = predictions.reduce((prev, current) =>
          prev.score > current.score ? prev : current
        );
        setHighestConfidenceObject(maxConfidenceObject);
      }
    };

    if (imageRef.current) {
      imageRef.current.onload = detectObjects;
    }
  }, []);

  useEffect(() => {
    if (highestConfidenceObject) {
      const ctx = canvasRef.current.getContext('2d');
      const { bbox, class: label, score } = highestConfidenceObject;

      // Draw the bounding box
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 4;
      ctx.strokeRect(bbox[0], bbox[1], bbox[2], bbox[3]);

      // Draw the label with confidence
      ctx.font = '18px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText(
        `${label} (${Math.round(score * 100)}%)`,
        bbox[0],
        bbox[1] > 20 ? bbox[1] - 10 : bbox[1] + 20
      );
    }
  }, [highestConfidenceObject]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        ref={imageRef}
        src="images/potted-plant-2.jpg"
        alt="Target"
        width="600"
        height="800"
      />
      <canvas
        ref={canvasRef}
        width="600"
        height="800"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default ObjectDetection;