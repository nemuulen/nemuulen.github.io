# Project Files Folder

## Add Project-Specific Documents Here

Upload PDFs, reports, presentations, and other documents related to your projects.

## File Organization

Organize files by project for easy management:

```
/public/files/projects/
├── radikal-proposal.pdf
├── radikal-user-research.pdf
├── challo-presentation.pdf
├── aid-ai-report.pdf
├── dku-intersections-design-guide.pdf
├── viral-campaign-results.pdf
├── data-analysis-report.pdf
├── loreal-pitch-deck.pdf
├── computer-graphics-documentation.pdf
└── iot-project-report.pdf
```

## How to Use

1. Upload your document to this folder
2. Reference it in your project detail page:

```typescript
documents: [
  {
    title: "Project Proposal",
    description: "Initial project proposal and planning document",
    fileName: "radikal-proposal.pdf", // This file
  },
],
```

## File Types Supported

- PDF documents
- PowerPoint/Keynote presentations (export as PDF first)
- Reports and research papers
- Design documentation

## File Size

Keep files under 10MB for best performance. Compress PDFs if needed.
