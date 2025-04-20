import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'กรุณาระบุชื่อบทความ'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'กรุณาระบุ slug'],
    unique: true,
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'กรุณาระบุเนื้อหาบทความ'],
  },
  coverImage: {
    type: String,
    required: [true, 'กรุณาระบุรูปภาพปก'],
  },
  metaTitle: {
    type: String,
    required: [true, 'กรุณาระบุ meta title'],
  },
  metaDescription: {
    type: String,
    required: [true, 'กรุณาระบุ meta description'],
    maxLength: 160,
  },
  keywords: [{
    type: String,
    trim: true,
  }],
  publishedAt: {
    type: Date,
  },
}, {
  timestamps: true,
});


blogSchema.index({ title: 'text', content: 'text' });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog; 