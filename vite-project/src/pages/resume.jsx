import AIbot from "../AIbot";
import TextToSpeech from "../TextToSpeech";

function Resume() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // to-do: replace the text 
        await TextToSpeech('Hello, this is a sample text for speech synthesis.');
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="resume">
      <p>RESUME!</p>
      <AIbot />
      {/* <TextToSpeech /> */}
    </div>
  )
}

export default Resume;