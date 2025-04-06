"use client";

import { useState } from "react";

const phonemeMap: Record<string, string> = {
  a: "æ",
  ah: "ɑ",
  ar: "ɑɹ",
  aw: "ɔ",
  ay: "eɪ",
  e: "ɛ",
  ee: "i",
  er: "ɝ",
  i: "ɪ",
  ie: "aɪ",
  o: "oʊ",
  oo: "u",
  ou: "aʊ",
  oy: "ɔɪ",
  u: "ʌ",
  uh: "ə",
  b: "b",
  ch: "tʃ",
  d: "d",
  f: "f",
  g: "g",
  h: "h",
  j: "dʒ",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  ng: "ŋ",
  p: "p",
  r: "ɹ",
  s: "s",
  sh: "ʃ",
  t: "t",
  th: "θ",
  v: "v",
  w: "w",
  y: "j",
  z: "z",
  zh: "ʒ",
};

export default function IPAConverter() {
  const [text, setText] = useState("");
  const [ipaText, setIpaText] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const convertToIPA = (word: string): string => {
    let result = "";
    let i = 0;

    word = word.toLowerCase();

    while (i < word.length) {
      let matched = false;

      if (i < word.length - 1) {
        const twoChars = word.slice(i, i + 2);
        if (phonemeMap[twoChars]) {
          result += phonemeMap[twoChars];
          i += 2;
          matched = true;
          continue;
        }
      }

      if (phonemeMap[word[i]]) {
        result += phonemeMap[word[i]];
        matched = true;
      } else {
        result += word[i];
      }

      i++;
    }

    return result;
  };

  const handleConvert = () => {
    try {
      setError("");
      setIsLoading(true);

      if (!text.trim()) {
        setIpaText("");
        return;
      }

      const words = text.trim().split(/\s+/);
      const ipaWords = words.map(convertToIPA);

      setIpaText(ipaWords.join(" "));
    } catch (error) {
      setError("Error converting text to IPA.");
      setIpaText("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold text-black tracking-tighter">
          IPA Converter
        </h1>
        <p className="text-gray-600">
          Convert English text to International Phonetic Alphabet
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="text-input"
            className="block text-sm font-medium mb-2 text-black"
          >
            Enter Text
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (!e.target.value.trim()) {
                setIpaText("");
                setError("");
              }
            }}
            className="w-full p-3 border rounded-lg min-h-[100px] focus:ring-2 focus:ring-black focus:border-transparent text-black bg-white"
            placeholder="Enter English text here..."
          />
        </div>

        <button
          onClick={handleConvert}
          disabled={!text.trim() || isLoading}
          className="w-full bg-emerald-500 cursor-pointer font-medium tracking-tight text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isLoading ? "Converting..." : "Convert to IPA"}
        </button>

        {error && (
          <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2 text-black">
            IPA Transcription
          </label>
          <div
            className={`w-full p-3 border rounded-lg min-h-[100px] text-black bg-white ${
              ipaText ? "bg-white" : "bg-gray-50"
            } font-ipa`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-pulse">Converting...</div>
              </div>
            ) : (
              ipaText || "IPA transcription will appear here..."
            )}
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center flex justify-between">
        <p>Using phoneme-based conversion to IPA</p>
        <p>Ruslan Mukhamedvaleev</p>
      </div>
    </div>
  );
}
