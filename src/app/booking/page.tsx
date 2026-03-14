'use client'

import { useState } from 'react'
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel
} from '@mui/material'
import DateReserve from '@/components/DateReserve'
import { Dayjs } from 'dayjs'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    nameLastname: '',
    contactNumber: '',
    venue: ''
  })
  const [date, setDate] = useState<Dayjs | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, date })
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Book Venue
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              name="Name-Lastname"
              label="Name-Lastname"
              variant="standard"
              fullWidth
              value={formData.nameLastname}
              onChange={(e) => setFormData({ ...formData, nameLastname: e.target.value })}
              InputLabelProps={{ style: { color: '#e5e7eb' } }}
              inputProps={{ style: { color: '#e5e7eb' } }}
              sx={{
                '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: '#e5e7eb' },
                '& .MuiInput-underline:after': { borderBottomColor: '#e5e7eb' }
              }}
            />
            
            <TextField
              name="Contact-Number"
              label="Contact-Number"
              variant="standard"
              fullWidth
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              InputLabelProps={{ style: { color: '#e5e7eb' } }}
              inputProps={{ style: { color: '#e5e7eb' } }}
              sx={{
                '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: '#e5e7eb' },
                '& .MuiInput-underline:after': { borderBottomColor: '#e5e7eb' }
              }}
            />
          </div>

          <FormControl fullWidth variant="standard" sx={{ mb: 4 }}>
            <InputLabel id="venue-label" style={{ color: '#e5e7eb' }}>Select=id=venue</InputLabel>
            <Select
              id="venue"
              label="Select=id=venue"
              value={formData.venue}
              onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
              labelId="venue-label"
              sx={{
                color: '#e5e7eb',
                '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: '#e5e7eb' },
                '& .MuiInput-underline:after': { borderBottomColor: '#e5e7eb' },
                '& .MuiSvgIcon-root': { color: '#e5e7eb' }
              }}
            >
              <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
              <MenuItem value="Spark">Spark Space</MenuItem>
              <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
          </FormControl>

          <div className="mb-6">
            <p className="text-gray-300 mb-2">Date</p>
            <DateReserve value={date} onChange={setDate} />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              name="Book Venue"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#6366f1',
                color: 'white',
                padding: '12px 48px',
                fontSize: '16px',
                borderRadius: '24px',
                '&:hover': {
                  backgroundColor: '#4f46e5'
                }
              }}
            >
              Book Venue
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}