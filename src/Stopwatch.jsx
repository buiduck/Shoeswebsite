import  { useState, useRef, useEffect } from 'react';

const Stopwatch = () => {
  // State để lưu số giây đã trôi qua
  const [time, setTime] = useState(0);
  // State để xác định đồng hồ đang chạy hay không
  const [isRunning, setIsRunning] = useState(false);
  // Sử dụng useRef để lưu tham chiếu đến setInterval
  const timerRef = useRef(null);

  // Hàm format thời gian thành giờ:phút:giây
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  // useEffect quản lý việc start/stop của đồng hồ
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Tăng thời gian mỗi giây
      }, 1000);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current); // Dừng interval khi đồng hồ dừng
    }
    // Cleanup interval khi component unmount
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Hàm bắt đầu hoặc tiếp tục chạy đồng hồ
  const handleStart = () => {
    setIsRunning(true);
  };

  // Hàm dừng đồng hồ
  const handleStop = () => {
    setIsRunning(false);
  };

  // Hàm reset đồng hồ về 0
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <div>
        <button onClick={handleStart} >
          Start
        </button>
        <button onClick={handleStop} >
          Stop
        </button>
        <button onClick={handleReset} >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
