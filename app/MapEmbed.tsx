export default function MapEmbed(){
    return (
        <div className="flex justify-center mt-10 w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.0034708010137!2d100.49957065094715!3d13.957778998823914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2857f72bf0d85%3A0xcf6dd2942be07d44!2z4Lij4LmJ4Liy4LiZ4LmC4LiB4LmL4LiZ4LmJ4Liz4LmB4LiC4LmH4LiH!5e0!3m2!1sth!2sth!4v1731252622225!5m2!1sth!2sth"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="แผนที่ร้านโก๋น้ำแข็ง ปทุมธานี"
        ></iframe>
      </div>
    )
}