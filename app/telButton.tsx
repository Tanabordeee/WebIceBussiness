
'use client';
import Swal from 'sweetalert2';
export default function TelButton() {
    const handleCall = () => {
        Swal.fire({
          title: "Calling...",
          text: 'กำลังโทรไปยังหมายเลขที่กำหนด!',
          icon: 'info',
          confirmButtonText: 'OK',
          backdrop: true,
          allowOutsideClick: false,
        });
    
        setTimeout(() => {
          window.location.href = 'tel:+66894448455';
        }, 1000);
      };

  return (
    <button
      className="text-3xl border-2 pt-6 pb-6 px-16 border-slate-500 rounded-[28px] bg-white"
      style={{ boxShadow: "6px 4px 1.3px #38878E" }}
      onClick={handleCall}
    >
      สั่งน้ำแข็ง
    </button>
  );
}
