import React from 'react'
import { useState } from 'react'
import { useListings } from '../context/ListingsContext'
import { useAuth } from '../context/AuthContext'

const AddListings = () => {
  const { currentUser } = useAuth()
  const { addListing } = useListings()
  const [form, setForm] = useState({ title: '', city: '', rent: '', beds: 1, baths: 1, size: '', image: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!currentUser || currentUser.role !== 'owner') return alert('Login as Owner to add a listing')
    const payload = { ...form, rent: Number(form.rent), ownerId: currentUser.id }
    addListing(payload)
    setForm({ title: '', city: '', rent: '', beds: 1, baths: 1, size: '', image: '' })
    alert('Listing added (demo)')
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Add a Listing</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">This is a demo form for the minor project.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="text-sm">Title</label>
          <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 dark:border-neutral-700 dark:bg-neutral-900" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm">Price</label>
            <input value={form.rent} onChange={e=>setForm({...form,rent:e.target.value})} type="number" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <div>
            <label className="text-sm">City</label>
            <input value={form.city} onChange={e=>setForm({...form,city:e.target.value})} className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
        </div>
        <div>
          <label className="text-sm">Description</label>
          <textarea value={form.size} onChange={e=>setForm({...form,size:e.target.value})} rows="2" placeholder="e.g., 900 sqft" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none dark:border-neutral-700 dark:bg-neutral-900"></textarea>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-sm">Beds</label>
            <input type="number" value={form.beds} onChange={e=>setForm({...form,beds:Number(e.target.value)})} className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <div>
            <label className="text-sm">Baths</label>
            <input type="number" value={form.baths} onChange={e=>setForm({...form,baths:Number(e.target.value)})} className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
          <div>
            <label className="text-sm">Image URL</label>
            <input value={form.image} onChange={e=>setForm({...form,image:e.target.value})} className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none dark:border-neutral-700 dark:bg-neutral-900" />
          </div>
        </div>
        <button type="submit" className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-500">Save</button>
      </form>
    </section>
  )
}

export default AddListings
