# Resume Directory

## How to Add Your Resume PDF

1. **Add your PDF file** to this directory with the name `resume.pdf`
   
2. **File naming**: The file should be named exactly `resume.pdf` (all lowercase)

3. **File location**: 
   ```
   public/resume/resume.pdf
   ```

4. **Recommended PDF settings**:
   - File size: Keep under 2MB for fast loading
   - Format: PDF 1.4 or higher
   - Ensure it's not password protected
   - Include proper metadata (Author, Title, etc.)

## Current Setup

The "Download CV" button on your portfolio homepage will download the file as `Tushank_Resume.pdf` when clicked.

The PDF is served from:
- **URL path**: `/resume/resume.pdf`
- **Physical path**: `public/resume/resume.pdf`

## Testing

After adding your PDF:
1. Start the development server: `pnpm dev`
2. Visit: `http://localhost:3000/resume/resume.pdf`
3. The PDF should display/download
4. Click the "Download CV" button on the homepage to test

## Production

When deployed to Vercel, the resume will be available at:
`https://your-domain.com/resume/resume.pdf`
