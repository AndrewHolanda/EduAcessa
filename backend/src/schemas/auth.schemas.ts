import { z } from 'zod';

const email = z.string().trim().toLowerCase().pipe(z.email('E-mail inválido'));

// Rules for the sign-up form
export const registerSchema = z
  .object({
    name: z.string().trim().min(3, 'Informe o nome completo'),
    email,
    password: z
      .string()
      .min(8, 'A senha precisa ter pelo menos 8 caracteres')
      .max(72, 'A senha pode ter no máximo 72 caracteres'),
    school: z.string().trim().min(2, 'Informe a escola ou instituição'),
    role: z.enum(['student', 'teacher'], 'Tipo de usuário inválido'),
    gradeYear: z.number().int().min(6, 'Ano escolar inválido').max(9, 'Ano escolar inválido').optional(),
    subject: z.string().trim().min(2, 'Informe a disciplina que leciona').optional(),
    phone: z.string().trim().max(20, 'Telefone inválido').optional(),
    acceptedTerms: z.literal(true, 'É preciso aceitar os termos de uso'),
  })
  .superRefine((data, ctx) => {
    if (data.role === 'student' && data.gradeYear === undefined) {
      ctx.addIssue({ code: 'custom', path: ['gradeYear'], message: 'Selecione o ano escolar' });
    }
    if (data.role === 'teacher' && !data.subject) {
      ctx.addIssue({ code: 'custom', path: ['subject'], message: 'Informe a disciplina que leciona' });
    }
  });

// Rules for the login form
export const loginSchema = z.object({
  email,
  password: z.string().min(1, 'Informe a senha'),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
