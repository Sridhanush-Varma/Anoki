// Command Parser for One-Command AI Tools Launcher

import { allTools, Tool } from './recommendationEngine';

// Define command keywords and their associated tools
interface CommandKeyword {
  keywords: string[];
  toolId: string;
  action: string;
}

// Define tool chains for common operations
interface ToolChain {
  id: string;
  name: string;
  description: string;
  tools: string[]; // Array of tool IDs in sequence
}

// Define command keywords for parsing
const commandKeywords: CommandKeyword[] = [
  // Conversion keywords
  { keywords: ['convert', 'change', 'transform'], toolId: 'converter', action: 'convert' },
  { keywords: ['pdf', 'pdf file'], toolId: 'pdf-to-word', action: 'convert' },
  { keywords: ['word', 'docx', 'doc'], toolId: 'word-to-pdf', action: 'convert' },
  { keywords: ['image', 'picture', 'photo'], toolId: 'image-converter', action: 'convert' },

  // Enhancement keywords
  { keywords: ['enhance', 'improve', 'upgrade', 'better'], toolId: 'enhancer', action: 'enhance' },
  { keywords: ['quality', 'resolution'], toolId: 'image-enhancer', action: 'enhance' },
  { keywords: ['text', 'writing', 'grammar'], toolId: 'text-enhancer', action: 'enhance' },
  { keywords: ['audio', 'sound'], toolId: 'audio-enhancer', action: 'enhance' },

  // Detection keywords
  { keywords: ['detect', 'check', 'verify', 'analyze'], toolId: 'detector', action: 'detect' },
  { keywords: ['ai', 'artificial intelligence', 'generated'], toolId: 'ai-text-detector', action: 'detect' },
  { keywords: ['plagiarism', 'copied', 'original'], toolId: 'plagiarism-checker', action: 'detect' },

  // Editing keywords
  { keywords: ['edit', 'modify', 'change'], toolId: 'editor', action: 'edit' },
  { keywords: ['code', 'programming'], toolId: 'code-editor', action: 'edit' },

  // AI tools keywords
  { keywords: ['chat', 'talk', 'converse'], toolId: 'chatgpt', action: 'use' },
  { keywords: ['generate image', 'create image'], toolId: 'dalle', action: 'use' },
  { keywords: ['search', 'find', 'research'], toolId: 'perplexity', action: 'use' },
];

// Define common tool chains
export const toolChains: ToolChain[] = [
  {
    id: 'pdf-to-word-enhance',
    name: 'Convert PDF to Word and Enhance',
    description: 'Converts a PDF file to Word format and enhances the text quality',
    tools: ['pdf-to-word', 'text-enhancer']
  },
  {
    id: 'word-to-pdf-enhance',
    name: 'Convert Word to PDF and Enhance',
    description: 'Converts a Word document to PDF format with enhanced quality',
    tools: ['word-to-pdf', 'image-enhancer']
  },
  {
    id: 'enhance-image-convert',
    name: 'Enhance Image and Convert Format',
    description: 'Enhances image quality and converts to another format',
    tools: ['image-enhancer', 'image-converter']
  },
  {
    id: 'check-plagiarism-enhance',
    name: 'Check Plagiarism and Enhance Text',
    description: 'Checks text for plagiarism and enhances writing quality',
    tools: ['plagiarism-checker', 'text-enhancer']
  },
  {
    id: 'detect-ai-enhance',
    name: 'Detect AI Text and Enhance',
    description: 'Detects if text was AI-generated and enhances it',
    tools: ['ai-text-detector', 'text-enhancer']
  }
];

// Function to parse a command and identify tools
export const parseCommand = (command: string): {
  tools: Tool[],
  actions: string[],
  chainName?: string,
  chainDescription?: string,
  steps?: string[]
} => {
  const normalizedCommand = command.toLowerCase().trim();
  const words = normalizedCommand.split(/\s+/);

  // Track identified tools and actions
  const identifiedToolIds = new Set<string>();
  const actions = new Set<string>();
  const steps: string[] = [];

  // Check each word against our keywords
  words.forEach(word => {
    commandKeywords.forEach(keyword => {
      if (keyword.keywords.some(k => normalizedCommand.includes(k))) {
        identifiedToolIds.add(keyword.toolId);
        actions.add(keyword.action);
      }
    });
  });

  // Check for specific file types mentioned
  if (normalizedCommand.includes('pdf') && normalizedCommand.includes('word')) {
    if (normalizedCommand.includes('to word') || normalizedCommand.includes('into word')) {
      identifiedToolIds.add('pdf-to-word');
      actions.add('convert');
      steps.push('Convert PDF file to Word document format');
    } else {
      identifiedToolIds.add('word-to-pdf');
      actions.add('convert');
      steps.push('Convert Word document to PDF format');
    }
  }

  // Check for enhancement requests
  if (normalizedCommand.includes('enhance') || normalizedCommand.includes('improve') || normalizedCommand.includes('better')) {
    if (normalizedCommand.includes('image') || normalizedCommand.includes('picture') || normalizedCommand.includes('photo')) {
      identifiedToolIds.add('image-enhancer');
      actions.add('enhance');
      steps.push('Enhance image quality and resolution');
    } else if (normalizedCommand.includes('text') || normalizedCommand.includes('writing') || normalizedCommand.includes('grammar')) {
      identifiedToolIds.add('text-enhancer');
      actions.add('enhance');
      steps.push('Improve text quality, grammar, and readability');
    } else if (normalizedCommand.includes('audio') || normalizedCommand.includes('sound')) {
      identifiedToolIds.add('audio-enhancer');
      actions.add('enhance');
      steps.push('Enhance audio quality and clarity');
    }
  }

  // Check for detection requests
  if (normalizedCommand.includes('detect') || normalizedCommand.includes('check') || normalizedCommand.includes('analyze')) {
    if (normalizedCommand.includes('ai') && normalizedCommand.includes('text')) {
      identifiedToolIds.add('ai-text-detector');
      actions.add('detect');
      steps.push('Detect if text was generated by AI');
    } else if (normalizedCommand.includes('plagiarism')) {
      identifiedToolIds.add('plagiarism-checker');
      actions.add('detect');
      steps.push('Check text for plagiarism against online sources');
    } else if (normalizedCommand.includes('ai') && normalizedCommand.includes('image')) {
      identifiedToolIds.add('ai-image-detector');
      actions.add('detect');
      steps.push('Detect if image was generated by AI');
    }
  }

  // Check for editing requests
  if (normalizedCommand.includes('edit') || normalizedCommand.includes('modify')) {
    if (normalizedCommand.includes('image')) {
      identifiedToolIds.add('image-editor');
      actions.add('edit');
      steps.push('Edit image with basic tools');
    } else if (normalizedCommand.includes('text')) {
      identifiedToolIds.add('text-editor');
      actions.add('edit');
      steps.push('Edit text with formatting tools');
    } else if (normalizedCommand.includes('code')) {
      identifiedToolIds.add('code-editor');
      actions.add('edit');
      steps.push('Edit code with syntax highlighting');
    }
  }

  // Check if this matches a predefined tool chain
  let matchedChain: ToolChain | undefined;

  // Convert sets to arrays for easier comparison
  const identifiedToolIdsArray = Array.from(identifiedToolIds);

  // Check each tool chain
  for (const chain of toolChains) {
    // Simple check: if all tools in the chain are in our identified tools, it's a match
    if (chain.tools.every(toolId => identifiedToolIdsArray.includes(toolId))) {
      matchedChain = chain;

      // If we have a match, order the tools according to the chain
      if (matchedChain) {
        // Clear steps and rebuild them in the correct order
        steps.length = 0;

        // Add steps for each tool in the chain
        chain.tools.forEach(toolId => {
          const tool = allTools.find(t => t.id === toolId);
          if (tool) {
            if (toolId === 'pdf-to-word') {
              steps.push('Convert PDF file to Word document format');
            } else if (toolId === 'word-to-pdf') {
              steps.push('Convert Word document to PDF format');
            } else if (toolId === 'image-enhancer') {
              steps.push('Enhance image quality and resolution');
            } else if (toolId === 'text-enhancer') {
              steps.push('Improve text quality, grammar, and readability');
            } else if (toolId === 'audio-enhancer') {
              steps.push('Enhance audio quality and clarity');
            } else if (toolId === 'ai-text-detector') {
              steps.push('Detect if text was generated by AI');
            } else if (toolId === 'plagiarism-checker') {
              steps.push('Check text for plagiarism against online sources');
            } else if (toolId === 'image-editor') {
              steps.push('Edit image with basic tools');
            } else {
              steps.push(`Use ${tool.name}`);
            }
          }
        });
      }

      break;
    }
  }

  // Get the actual Tool objects in the correct order if we have a matched chain
  let tools: Tool[] = [];

  if (matchedChain) {
    tools = matchedChain.tools
      .map(id => allTools.find(tool => tool.id === id))
      .filter((tool): tool is Tool => tool !== undefined);
  } else {
    // Otherwise, just return all identified tools
    tools = Array.from(identifiedToolIds)
      .map(id => allTools.find(tool => tool.id === id))
      .filter((tool): tool is Tool => tool !== undefined);
  }

  return {
    tools,
    actions: Array.from(actions),
    chainName: matchedChain?.name,
    chainDescription: matchedChain?.description,
    steps
  };
};

// Function to get suggested commands
export const getSuggestedCommands = (): string[] => {
  return [
    "Convert this PDF to Word and enhance its quality",
    "Check this text for plagiarism and improve its grammar",
    "Enhance this image and convert it to PNG",
    "Detect if this text was AI-generated and improve it",
    "Convert this Word document to PDF with high quality",
    "Enhance the audio quality of this recording",
    "Edit this image and enhance its colors",
    "Check if this essay contains plagiarism"
  ];
};
