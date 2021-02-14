import { useState } from 'react';
import styled from 'styled-components';
import validUrl from 'valid-url';
import { ToastContainer, toast } from 'react-toastify';

import Title from './Title';
import Input from './Input';
import GenerateButton from './GenerateButton';
import DisplayUrl from './DisplayUrl';

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  background: linear-gradient(
    350deg,
    rgba(37, 93, 247, 0.2),
    rgba(129, 194, 246, 0.5)
  );

  & > section {
    width: 1200px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;

    margin-top: 20vh;
    margin-bottom: 50px;
    position: relative;
  }
`;

function Main() {
  const [input, setInput] = useState('');
  const [maskedUrl, setMaskedUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const createMapping = async () => {
    if (validUrl.isWebUri(input)) {
      try {
        setIsGenerating(true);
        const response = await fetch('/api/map', {
          method: 'POST',
          body: JSON.stringify({ url: input }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        toast.success('Masked URL generated successfully');
        setMaskedUrl(`${window.location.href}m/${result.identifier}`);
      } catch (error) {
        console.error(error);
      } finally {
        setIsGenerating(false);
      }
    } else {
      toast.error('Enter a valid URL');
    }
  };

  return (
    <>
      <MainWrapper>
        <Title>
          <img src="/anonymous-face-mask.svg" alt="Anonymous Face Mask" />
          Mask your&nbsp;<span title="web">🕸️</span>&nbsp;URLs
          <img src="/anonymous-face-mask.svg" alt="Anonymous Face Mask" />
        </Title>
        <section>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onClear={() => setInput('')}
            placeholder="https://google.com"
          />
          <GenerateButton
            showSpinner={isGenerating}
            disabled={!input || isGenerating}
            onClick={createMapping}
          />
        </section>
        <DisplayUrl
          link={maskedUrl}
          onCopy={() => toast.success('Copied URL to Clipboard')}
        />
      </MainWrapper>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        limit={3}
      />
    </>
  );
}

export default Main;
