# Anthropic Chat Integration Setup

## Current Status
The chat component is currently using intelligent fallback responses. To enable real Anthropic AI integration, follow these steps:

## Setup Instructions

### 1. Install Anthropic SDK
```bash
npm install @anthropic-ai/sdk
```

### 2. Add Environment Variable
Add your Anthropic API key to `.env.local`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

### 3. Update API Route
The API route at `/app/api/chat/route.ts` has commented code ready for Anthropic integration. Simply:
1. Uncomment the Anthropic implementation section
2. Comment out or remove the fallback responses section
3. Deploy to production

### 4. Features Available
- Context-aware conversations with message history
- Customizable system prompts for brand voice
- Rate limiting ready (needs implementation)
- Error handling and fallbacks

### 5. Recommended Model
We recommend using `claude-3-haiku-20240307` for chat due to:
- Fast response times (< 1 second)
- Cost-effective pricing
- Sufficient capability for customer support

For more complex queries, you can upgrade to `claude-3-sonnet-20240229`.

## Security Considerations
- Never expose API keys in client-side code
- Implement rate limiting to prevent abuse
- Add authentication for production use
- Monitor usage and costs through Anthropic dashboard

## Testing
Test the chat functionality locally:
1. Add your API key to `.env.local`
2. Run `npm run dev`
3. Click the chat button on the site
4. Test various queries about products, pricing, and technical details