import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Popover, Modal, Input } from '@infinitex/tui-react';
import '@infinitex/tui-react/dist/bundle.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [input, setInput] = useState('');
  return (
    <div>
      <div>
        <Input
          placeholder="输入你的名字"
          style={{ width: 300 }}
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        />
        <h1>{input}</h1>
      </div>
      <Popover
        component={
          <div>
            <div style={{ fontWeight: 'bold' }}>Title</div>
            <div>isperter mds</div>
          </div>
        }
      >
        <Button content="打开窗口" onClick={() => setModalOpen(true)} variant="primary" />
      </Popover>

      <Modal isOpen={modalOpen} maskCloseable onClose={() => setModalOpen(false)}>
        <h1>Title</h1>
        <p>content</p>
      </Modal>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
