import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types-db';
import toast from 'react-hot-toast';