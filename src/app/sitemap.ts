import { MetadataRoute } from "next";
import { promises as fs } from 'fs';
import path from 'path';
import { fetchComments } from "@/utils/fetchComments";


async function getLastModifiedDate(filePath: string): Promise<Date> {
    try {
      const stats = await fs.stat(filePath);
      return stats.mtime; 
    } catch (error) {
      console.error('Erreur lors de la récupération de la date de modification:', error);
      return new Date('2024-12-16T15:28:30+00:00'); 
    }
  }



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const comments = await fetchComments()
    
    const commentLastModifiedDate = comments.reduce((acc: Date | undefined, current: {author: string, soin: number, message: string, note: number, createdAt: string}) => {
        
        const currentDate = new Date(current.createdAt); 
        
        if (!acc || currentDate > acc) {
          return currentDate;
        }
        
        return acc;
      }, undefined as Date | undefined); 
      
    
    const dataFilePath = path.resolve('src/app/data.js');
    const homeFilePath = path.resolve('src/app/page.tsx');
    const storyFilePath = path.resolve('src/app/mon-histoire/page.tsx');
    const polFilePath = path.resolve('src/app/politique-de-confidentialite/page.tsx');
    const legalFilePath = path.resolve('src/app/mentions-legales/page.tsx');

  
    const dataLastModifiedDate = await getLastModifiedDate(dataFilePath);
    const homeLastModifiedDate = await getLastModifiedDate(homeFilePath);
    const storyLastModifiedDate = await getLastModifiedDate(storyFilePath);
    const polLastModifiedDate = await getLastModifiedDate(polFilePath);
    const legalLastModifiedDate = await getLastModifiedDate(legalFilePath);

    return [
        {
            url: `${process.env.NEXT_PUBLIC_URL}`,
            lastModified: homeLastModifiedDate,
            priority: 1,
            changeFrequency: "monthly"
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/mon-histoire`,
            lastModified: storyLastModifiedDate,
            priority: 0.8,
            changeFrequency: "monthly"
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/eft`,
            lastModified: dataLastModifiedDate,
            priority: 0.8,
            changeFrequency: "monthly"
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/soin-energetique`,
            lastModified: dataLastModifiedDate,
            priority: 0.8,
            changeFrequency: "monthly"
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/massage-holistique`,
            lastModified: dataLastModifiedDate,
            priority: 0.8,
            changeFrequency: "monthly"
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/fleurs-de-bach`,
            lastModified: dataLastModifiedDate,
            priority: 0.8,
            changeFrequency: "monthly"
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/vos-avis`,
            lastModified: commentLastModifiedDate,
            priority: 0.8,
            changeFrequency: "weekly"
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/politique-de-confidentialite`,
            lastModified: polLastModifiedDate,
            priority: 0.6,
            changeFrequency: "yearly"
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/mentions-legales`,
            lastModified: legalLastModifiedDate,
            priority: 0.6,
            changeFrequency: "yearly"
        }
    ]
}