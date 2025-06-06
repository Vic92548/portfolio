
import { useState, useEffect } from 'react';

const InteractiveTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    { type: 'command', text: 'npm create awesome-project', delay: 500 },
    { type: 'output', text: '✓ Project created successfully', delay: 1000 },
    { type: 'output', text: '✓ Dependencies installed', delay: 300 },
    { type: 'output', text: '✓ TypeScript configured', delay: 300 },
    { type: 'command', text: 'npm run dev', delay: 800 },
    { type: 'output', text: '🚀 Server running on http://localhost:3000', delay: 500 },
    { type: 'command', text: '', delay: 0 }
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
    
    if (line.text === '') {
      // Just show cursor for empty command line
      return;
    }

    const timeout = setTimeout(() => {
      if (currentChar < line.text.length) {
        setCurrentChar(prev => prev + 1);
      } else {
        // Move to next line after delay
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, line.delay);
      }
    }, line.type === 'command' ? 80 : 30);

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="bg-vc-gray-900 rounded-xl shadow-2xl overflow-hidden transform perspective-1000 hover:rotate-y-0 transition-transform duration-500" 
         style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' }}>
      {/* Terminal Header */}
      <div className="bg-vc-gray-800 px-4 py-3 flex items-center gap-2 border-b border-vc-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-vc-gray-300 text-sm font-mono">victor@dev ~ %</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
        {terminalLines.slice(0, currentLine + 1).map((line, index) => (
          <div key={index} className="flex items-start gap-2">
            {line.type === 'command' ? (
              <>
                <span className="text-vc-success-400 select-none">$</span>
                <span className="text-vc-gray-100">
                  {index === currentLine ? 
                    line.text.substring(0, currentChar) : 
                    line.text
                  }
                  {index === currentLine && line.text !== '' && currentChar < line.text.length && (
                    <span className={`inline-block w-2 h-4 bg-vc-gray-300 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  )}
                  {index === currentLine && line.text === '' && (
                    <span className={`inline-block w-2 h-4 bg-vc-gray-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  )}
                </span>
              </>
            ) : (
              <span className="text-vc-gray-400 pl-4">
                {index === currentLine ? 
                  line.text.substring(0, currentChar) : 
                  line.text
                }
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
