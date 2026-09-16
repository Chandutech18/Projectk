import { NextResponse } from 'next/server';

const mockEducationInstitutes = [
  { id: 'edu1', name: 'Government Junior College Korutla', type: 'College', phone: '+91 87252 22001', address: 'College Road, Korutla', rating: 4.5, courses: ['MPC', 'BiPC', 'CEC', 'HEC'] },
  { id: 'edu2', name: 'Sri Chaitanya Techno School', type: 'School', phone: '+91 98490 12345', address: 'Venkateshwara Colony, Korutla', rating: 4.7, courses: ['Class 1 to 10', 'IIT Foundation'] },
  { id: 'edu3', name: 'Vivekananda Degree College', type: 'Degree College', phone: '+91 87252 22555', address: 'Metpally Road, Korutla', rating: 4.3, courses: ['B.Sc', 'B.Com', 'BBA'] },
  { id: 'edu4', name: 'Mastermind Coaching Academy', type: 'Coaching Center', phone: '+91 99887 66554', address: 'Tower Clock Junction, Korutla', rating: 4.8, courses: ['POLYCET', 'TS EAMCET', 'NEET'] },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const query = searchParams.get('q');

  let list = mockEducationInstitutes;

  if (type) {
    list = list.filter((e) => e.type.toLowerCase() === type.toLowerCase());
  }

  if (query) {
    const q = query.toLowerCase();
    list = list.filter((e) => e.name.toLowerCase().includes(q) || e.courses.some(c => c.toLowerCase().includes(q)));
  }

  return NextResponse.json({
    success: true,
    data: list,
    count: list.length,
    message: 'Education institutions retrieved successfully',
  });
}
