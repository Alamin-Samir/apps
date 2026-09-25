// app/api/products/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  // ১. আপনার নিজের তৈরি করা ডেটা (এটি ডেটাবেজ থেকেও আসতে পারে)
  const myProducts = [
    { id: 1, title: "আমার প্রথম বই", price: "৫০০", image: "https://via.placeholder.com/100" },
    { id: 2, title: "আমার প্রথম কলম", price: "৫০", image: "https://via.placeholder.com/100" }
  ];

  // ২. NextResponse ব্যবহার করে ডেটাগুলোকে JSON ফরম্যাটে ক্লায়েন্টের কাছে পাঠিয়ে দেওয়া
  return NextResponse.json(myProducts);
}