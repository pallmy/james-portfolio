export default function App() {
  return (
    <main className='min-h-screen bg-black text-white p-8'>
      <section className='max-w-6xl mx-auto'>
        <h1 className='text-6xl font-bold mb-6'>James Palma</h1>
        <p className='text-xl text-zinc-300 max-w-3xl'>
          Structural dynamics, embedded systems, UAV research, nonlinear mechanisms,
          computational engineering, and experimental mechanics.
        </p>

        <div className='grid md:grid-cols-2 gap-6 mt-12'>
          <div className='border border-zinc-800 rounded-2xl p-6'>
            <h2 className='text-2xl font-semibold mb-3'>Von Mises UAV Research</h2>
            <p className='text-zinc-400'>
              Bistable wing mechanisms, rotating snap-through systems, IMU integration,
              NEMA 23 driven test rigs, DM542 drivers, Arduino Mega control systems,
              OpenCV tracking, FFT analysis, and experimental structural dynamics.
            </p>
          </div>

          <div className='border border-zinc-800 rounded-2xl p-6'>
            <h2 className='text-2xl font-semibold mb-3'>Embedded Systems</h2>
            <p className='text-zinc-400'>
              Raspberry Pi 4, Arduino Mega, ICM-20948, ICM-42688, Adafruit IMUs,
              serial communication, sensor fusion pipelines, and real-time logging.
            </p>
          </div>

          <div className='border border-zinc-800 rounded-2xl p-6'>
            <h2 className='text-2xl font-semibold mb-3'>Engineering Software</h2>
            <p className='text-zinc-400'>
              Verizon automation systems, SQL scope parsing, PDF processing,
              infrastructure workflow automation, OpenCV tracking systems,
              and engineering data pipelines.
            </p>
          </div>

          <div className='border border-zinc-800 rounded-2xl p-6'>
            <h2 className='text-2xl font-semibold mb-3'>Fabrication & Testing</h2>
            <p className='text-zinc-400'>
              Bambu X1E fabrication, PA-CF structural prints, Psylo Tech-inspired
              elastomer load frame systems, rapid prototyping, and experimental fixtures.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
