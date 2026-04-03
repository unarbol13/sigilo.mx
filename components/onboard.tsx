"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  businessType: string | null;
  need: string | null;
  timeline: string | null;
  name: string;
  contact: string;
}

const BUSINESS_TYPES = [
  { id: "bar-restaurant", label: "Bar / Restaurante" },
  { id: "comercio", label: "Comercio / Retail" },
  { id: "gobierno", label: "Gobierno / Org." },
  { id: "servicios", label: "Servicios profesionales" },
  { id: "otro", label: "Otro" },
];

const NEEDS = [
  { id: "app-movil", label: "App movil" },
  { id: "sistema-web", label: "Sistema web" },
  { id: "pos", label: "Punto de venta (POS)" },
  { id: "automatizacion", label: "Automatizacion" },
  { id: "no-se", label: "No estoy seguro" },
];

const TIMELINES = [
  { id: "ya", label: "Lo antes posible" },
  { id: "1-3", label: "1-3 meses" },
  { id: "sin-prisa", label: "Sin prisa, quiero planear" },
];

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border text-sm transition-all duration-200 ${
        selected
          ? "border-neutral-100 bg-neutral-100/5 text-neutral-100"
          : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
      }`}
    >
      {label}
    </button>
  );
}

export function Onboard() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    businessType: null,
    need: null,
    timeline: null,
    name: "",
    contact: "",
  });

  const goNext = () => setStep((s) => Math.min(5, s + 1) as Step);
  const goBack = () => setStep((s) => Math.max(1, s - 1) as Step);

  const handleSubmit = () => {
    // TODO: send to Supabase or API
    console.log("Onboard data:", data);
    setSubmitted(true);
  };

  const progress = ((step - 1) / 4) * 100;

  if (submitted) {
    return (
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-emerald-400 text-2xl font-bold">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-100 mb-3">
              Listo, te contactamos pronto
            </h3>
            <p className="text-neutral-400 text-sm">
              Revisamos tu informacion y te escribimos en menos de 24 horas
              para agendar una platica.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-mono text-sm text-neutral-500 tracking-wider uppercase mb-3">
            Empecemos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
            ¿Tienes un proyecto en mente?
          </h2>
        </motion.div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          {/* Progress bar */}
          <div className="h-1 bg-neutral-800 rounded-full mb-8 overflow-hidden">
            <motion.div
              className="h-full bg-neutral-100 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Business type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-neutral-100 mb-1">
                  ¿Que tipo de negocio tienes?
                </h3>
                <p className="text-sm text-neutral-500 mb-5">
                  Esto nos ayuda a entender tu contexto
                </p>
                {BUSINESS_TYPES.map((opt) => (
                  <OptionButton
                    key={opt.id}
                    label={opt.label}
                    selected={data.businessType === opt.id}
                    onClick={() => {
                      setData({ ...data, businessType: opt.id });
                      setTimeout(goNext, 200);
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Step 2: Need */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-neutral-100 mb-1">
                  ¿Que necesitas?
                </h3>
                <p className="text-sm text-neutral-500 mb-5">
                  Selecciona lo que mejor describa tu necesidad
                </p>
                {NEEDS.map((opt) => (
                  <OptionButton
                    key={opt.id}
                    label={opt.label}
                    selected={data.need === opt.id}
                    onClick={() => {
                      setData({ ...data, need: opt.id });
                      setTimeout(goNext, 200);
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Step 3: Timeline */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-neutral-100 mb-1">
                  ¿Para cuando lo necesitas?
                </h3>
                <p className="text-sm text-neutral-500 mb-5">
                  No hay respuesta incorrecta
                </p>
                {TIMELINES.map((opt) => (
                  <OptionButton
                    key={opt.id}
                    label={opt.label}
                    selected={data.timeline === opt.id}
                    onClick={() => {
                      setData({ ...data, timeline: opt.id });
                      setTimeout(goNext, 200);
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h3 className="text-lg font-semibold text-neutral-100 mb-1">
                  ¿Como te contactamos?
                </h3>
                <p className="text-sm text-neutral-500 mb-5">
                  WhatsApp, email o como prefieras
                </p>

                <div>
                  <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    placeholder="Juan Perez"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-5 py-3.5 text-neutral-100 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-2">
                    WhatsApp o email
                  </label>
                  <input
                    type="text"
                    value={data.contact}
                    onChange={(e) =>
                      setData({ ...data, contact: e.target.value })
                    }
                    placeholder="477 123 4567 o tu@email.com"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-5 py-3.5 text-neutral-100 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-neutral-100 mb-4">
                  Confirma tu informacion
                </h3>

                <div className="space-y-3">
                  {[
                    { label: "Negocio", value: BUSINESS_TYPES.find((b) => b.id === data.businessType)?.label },
                    { label: "Necesidad", value: NEEDS.find((n) => n.id === data.need)?.label },
                    { label: "Timeline", value: TIMELINES.find((t) => t.id === data.timeline)?.label },
                    { label: "Nombre", value: data.name },
                    { label: "Contacto", value: data.contact },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between py-2 border-b border-neutral-800 last:border-0"
                    >
                      <span className="text-sm text-neutral-500">
                        {row.label}
                      </span>
                      <span className="text-sm text-neutral-100">
                        {row.value || "—"}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-neutral-800">
            {step > 1 ? (
              <button
                onClick={goBack}
                className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                ← Atras
              </button>
            ) : (
              <div />
            )}

            {step === 4 && (
              <button
                onClick={goNext}
                disabled={!data.name || !data.contact}
                className="text-sm font-medium text-neutral-950 bg-neutral-100 px-6 py-2.5 rounded-lg hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Revisar →
              </button>
            )}

            {step === 5 && (
              <button
                onClick={handleSubmit}
                className="text-sm font-medium text-neutral-950 bg-neutral-100 px-6 py-2.5 rounded-lg hover:bg-white transition-colors"
              >
                Enviar
              </button>
            )}
          </div>
        </div>

        {/* Alternative: just chat */}
        <div className="text-center mt-8">
          <p className="text-sm text-neutral-600">
            ¿Prefieres solo platicar?{" "}
            <a
              href="https://wa.me/524641936003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 underline underline-offset-4 transition-colors"
            >
              Escribenos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
