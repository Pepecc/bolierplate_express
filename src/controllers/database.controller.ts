import { Request, Response } from 'express';

export const testFunction = async (req: Request, res: Response): Promise<any> => {
  try {
    return res.status(200).json({ mensaje: 'Hola desde el back' });
  } catch (error) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};
