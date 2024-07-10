import React from 'react'

interface Props {
    value: string, 
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<Props> = ({value, handleInputChange}) => {
    return (
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter player name"
          className="custom-input"
          maxLength={30}
          style={{
            width: '90%', height: 40, border: 'none', outline:'none',
            fontWeight: 'bold', fontSize: 16, color: '#000' // Regular input text color
          }}
        />
    )
}
